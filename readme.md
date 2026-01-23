📌 PublicidadYMovimiento – Flujo de Trabajo Git (Mac & PC)

Este proyecto utiliza scripts + tasks de VS Code para simplificar el flujo de trabajo con Git entre Mac y Windows, evitando escribir comandos manualmente.

La idea es siempre la misma:

Pull antes de trabajar · Push al terminar

🍎 Mac (macOS)
🔄 Pull (actualizar proyecto)

Atajo:

Cmd (⌘) + Shift (⇧) + B


Qué hace:

Ejecuta ./scripts/mac/pull.sh

Trae los últimos cambios del repositorio remoto (main)

👉 Usar siempre antes de empezar a trabajar

🚀 Push (subir cambios)

Atajo:

Cmd (⌘) + Shift (⇧) + U


Qué hace:

Ejecuta ./scripts/mac/push.sh

Muestra git status

Pide mensaje de commit

Hace add, commit y push

👉 Usar siempre al terminar de trabajar

💻 Windows (PC)
🔄 Pull (actualizar proyecto)

Atajo:

Ctrl + Shift + B


Qué hace:

Ejecuta scripts\windows\pull.bat

Trae los últimos cambios del repositorio remoto (main)

🚀 Push (subir cambios)

Atajo:

Ctrl + Alt + P


Qué hace:

Ejecuta scripts\windows\push.bat

Muestra git status

Pide mensaje de commit

Hace add, commit y push

🧠 Reglas importantes

✅ Siempre Pull antes de trabajar

✅ Siempre Push al terminar

❌ No editar el mismo archivo en Mac y PC al mismo tiempo

❌ No versionar .vscode/tasks.json (depende del sistema operativo)

📁 Scripts

Los scripts sí están versionados:

scripts/mac/*.sh

scripts/windows/*.bat

Cada sistema operativo usa los suyos.

🧘‍♂️ Filosofía

Este flujo está pensado para:

reducir fricción mental

evitar errores tontos

mantener sincronía Mac ↔ PC sin esfuerzo