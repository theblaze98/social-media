export const RegisterEmailTemplate = (username: string, verifyCode: string) => `
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
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>SocialNet</h1> <!-- Cambié el nombre de 'Blog' a 'SocialNet' para reflejar la red social -->
        </div>
        <div class="content">
            <h2>¡Bienvenido a SocialNet!</h2> <!-- Cambié el mensaje de registro exitoso -->
            <p>¡Hola ${username}!</p>
            <p>Gracias por unirte a SocialNet, donde puedes conectar con amigos, compartir momentos y descubrir nuevas comunidades.</p>
            <h3>Código de Verificación</h3>
            <div class="verify-code-content">${verifyCode}</div>
            <p>Por favor, usa este código para verificar tu cuenta y comenzar a explorar todo lo que SocialNet tiene para ofrecer.</p>
        </div>
    </div>
</body>
</html>
`
