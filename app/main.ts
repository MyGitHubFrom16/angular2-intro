/**
 * main.ts - файл который импортирует основной модуль приложения и запускает его.
 *  отдельный файл для запуска приложения, для того что бы в будущем упростить тестирование основого модуля.
 */
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // платформа, на которой будет работать приложение.
import { AppModule } from './app.module';   // основной модуль приложения.

const platform = platformBrowserDynamic(); // экземпляр платформы.
platform.bootstrapModule(AppModule);    // запуск приложения.