**React native & Typescript App**

 **Typescript**
 Se integro typescript en los componentes de tal manera que se tiene que proporcionar una interfaz con la estructura de datos esperada de esta manera se puede conseguir tener una seguridad y mayor confianza al tipo de datos que se estan esperando ya sean *props* o *datos*.

**Estructura de archivos:**
Utilice una cierta estructura para organizar los archivos incluyendo una carpeta por cada *screen*
para asi poder tener las respectivas interfaces, modelos y estilo de manera mas organizada no es lo ideal para un proyecto pequeño pero la mejor para empezar una app nueva que se desea escalar.

 - screen
	 - screen.tsx
	 - interface.ts
	 - style.ts

**Redux & Saga**
La información de la *API* es procesada por redux-saga ya que nos permite hacer modificaciones al estado de manera asíncrona.

**Eslint & flow pre-commit**
Se integro *husky  & sus respectivos *hooks*  para asi poder ejecutar lint previo a cada *pre-commit* & *pre-push* con esto se puede conseguir obtener errores o advertencias segun nuestras reglas antes de que se incluyan al repositorio. 

**Configuración**
Instalar dependencias

    npm i
Iniciar App

    npm run android






