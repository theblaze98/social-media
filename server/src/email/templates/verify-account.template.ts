export const VerifyAccountTemplate = (username: string, verifyCode: string) => `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: Arial, sans-serif;
        }
        .container {
            background-color: #181818;
            color: #fff;
            margin: 0 auto;
            width: 80%;
            padding: 40px;
        }
        .header {
            text-align: center;
            padding: 20px;
        }
        .content {
            background-color: #242424;
            padding: 20px;
            margin-top: 20px;
            border-radius: 8px;
        }
        h2 {
            font-size: 28px;
            text-align: center;
        }
        p {
            font-size: 24px;
        }
        .verify-code-content {
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            letter-spacing: 4px;
            color: #f2f2f2;
            background-color: #181818;
            padding: 10px 20px;
            border-radius: 5px;
            margin-top: 20px;
        }
        .cta {
            margin-top: 30px;
            text-align: center;
        }
        .cta-button {
            background-color: #f39c12;
            color: #fff;
            padding: 15px 30px;
            font-size: 20px;
            border-radius: 5px;
            text-decoration: none;
            font-weight: bold;
            display: inline-block;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Verifica tu cuenta en SocialNet</h1>
        </div>
        <div class="content">
            <h2>¡Hola ${username}!</h2>
            <p>Estás a un paso de activar tu cuenta en SocialNet. Utiliza el código de verificación a continuación para completar el proceso.</p>
            <h3>Tu Código de Verificación</h3>
            <div class="verify-code-content">${verifyCode}</div>
            <p>Introduce este código en la página de verificación para activar tu cuenta.</p>
            <div class="cta">
                <a href="#" class="cta-button">Verificar mi cuenta</a>
            </div>
            <p>Si no solicitaste esta verificación, puedes ignorar este mensaje.</p>
        </div>
    </div>
</body>
</html>
`
