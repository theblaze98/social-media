export const ChangePasswordTemplate = (
  username: string,
  verifyCode: string,
) => `
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
            <h1>SocialNet</h1> <!-- Cambié el nombre de 'Blog' a 'SocialNet' -->
        </div>
        <div class="content">
            <h2>Código para Cambio de Contraseña</h2> <!-- Ajusté el título para un contexto de red social -->
            <p>${username}, hemos recibido una solicitud para cambiar tu contraseña.</p>
            <p>Si no has solicitado este cambio, simplemente ignora este mensaje. Si fuiste tú, utiliza el siguiente código para proceder:</p>
            <h3>Código de Verificación</h3>
            <div class="verify-code-content">${verifyCode}</div>
            <p>Introduce este código en la página de cambio de contraseña para confirmar la solicitud.</p>
        </div>
    </div>
</body>
</html>
`
