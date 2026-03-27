import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Heroes } from './heroes/heroes';
import { RemoveSpacesPipe } from './remove-spaces-pipe';

@NgModule({
  declarations: [App],
  imports: [BrowserModule, AppRoutingModule, Heroes, RemoveSpacesPipe],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
