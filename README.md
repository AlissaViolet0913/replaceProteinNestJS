# ログイン認証の流れ

- 認証成功しログインしたユーザーにサーバから JWT を渡す。
- ライアントはリクエスト時に JWT をサーバに渡す。
  サーバ側で JWT を複合し、かつ id が正しいかをチェックする。
  ※JWT をサーバに渡す場合、リクエストの Auth ヘッダに JWT を載せることで CSRF 気弱性を防ぐ
