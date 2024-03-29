/*
|--------------------------------------------------------------------------
| Http Exception Handler
|--------------------------------------------------------------------------
|
| AdonisJs will forward all exceptions occurred during an HTTP request to
| the following class. You can learn more about exception handling by
| reading docs.
|
| The exception handler extends a base `HttpExceptionHandler` which is not
| mandatory, however it can do lot of heavy lifting to handle the errors
| properly.
|
*/

import Logger from '@ioc:Adonis/Core/Logger'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import HttpExceptionHandler from '@ioc:Adonis/Core/HttpExceptionHandler'

export default class ExceptionHandler extends HttpExceptionHandler {
  protected statusPages = {
    '403': 'errors/unauthorized',
    '404': 'errors/not-found',
    '500..599': 'errors/server-error',
  }

  constructor () {
    super(Logger)
  }

  public async handle(error: any, ctx: HttpContextContract) {
    if (ctx.auth.defaultGuard === 'web') {
      return super.handle(error, ctx)
    }
    
    /**
     * Massage exception message on api endpoints
     */
    if (ctx.auth.defaultGuard === 'api') {
      switch (error.constructor.name) {
        case 'ValidationException':
          ctx.response.validationFailed(error.status, error.messages.errors[0].message)
          break;
        case 'AuthenticationException':
          ctx.response.unauthorized()
          break;
      
        default:
          return super.handle(error, ctx)
      }
    }
  }
}
