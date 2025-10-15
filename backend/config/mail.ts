/**
 * Config source: https://git.io/JvgAf
 *
 * Feel free to let us know via PR, if you find something broken in this contract
 * file.
 */

import Env from '@ioc:Adonis/Core/Env'

const mailConfig = {
  /*
  |--------------------------------------------------------------------------
  | Default mailer
  |--------------------------------------------------------------------------
  |
  | The following mailer will be used to send emails, when you don't specify
  | a mailer
  |
  */
  mailer: 'smtp',

  /*
  |--------------------------------------------------------------------------
  | Mailers
  |--------------------------------------------------------------------------
  |
  | You can define or more mailers to send emails from your application. A
  | single `driver` can be used to define multiple mailers with different
  | config.
  |
  | For example: Postmark driver can be used to have different mailers for
  | sending transactional and promotional emails
  |
  */
  mailers: {
    /*
    |--------------------------------------------------------------------------
    | Smtp
    |--------------------------------------------------------------------------
    |
    | Uses SMTP protocol for sending email
    |
    */
  connection: 'TLSv1.2',
   smtp: {
      driver: 'smtp',
      pool: true,
      host: Env.get('SMTP_HOST'),
      port: Env.get('SMTP_PORT'),
      secure: false,
      auth: {
        user: Env.get('SMTP_USERNAME'),
        pass: Env.get('SMTP_PASSWORD'),
        type: 'login',
      },
      tls: {
        ciphers:'SSLv3'
      },
    },
  },
}

export default mailConfig
