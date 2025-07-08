![Logo](/.github/questly.png)

Es una página para generar encuentas de manera local y rápida, sin necesidad de conexión a internet. Ideal para eventos, reuniones o cualquier situación donde necesites recopilar opiniones o datos de manera eficiente.

> [!warning]
> Esta aplicación es un proyecto personal por lo que queda **prohibido** su uso comercial. Si deseas utilizarla con fines comerciales, por favor contacta conmigo a través de [mi correo](mailto:support@rickytodev.xyz).

## ⚙️ Como usarlo

### 1. Instalación

- Clona el repositorio y navega a la carpeta del proyecto

  ```bash
  git clone https://github.com/rickytodev/questly.git
  ```

  ```bash
  cd questly
  ```

- Instala las dependencias usando `pnpm` o `bun` ya que son los manejadores de paquetes más rápidos y eficientes.

  ```bash
  pnpm install
  ```

  o

  ```bash
  bun install
  ```

### 2. Configuración

- Crea un archivo `.env` en la raíz del proyecto y configura las variables necesarias, haciendo referencia al archivo `.env.example` para ver los valores necesarios.

  ```bash
  New-Item -Path .env
  ```

### 3. Ejecutar el servidor

- Inicia el servidor de desarrollo con el siguiente comando:

  ```bash
  pnpm dev
  ```

  o

  ```bash
  bun dev
  ```

## 🧪 Pruebas

Primero debes de ejecuar el servidor de desarrollo:

```bash
pnpm dev
```

o

```bash
bun dev
```

Luego, puedes ejecutar las pruebas con el siguiente comando:

```bash
pnpm test
```

o

```bash
bun test
```
