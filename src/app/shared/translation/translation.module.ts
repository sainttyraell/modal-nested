import {ModuleWithProviders, NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateModule, TranslateLoader, TranslateService} from '@ngx-translate/core';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  exports: [TranslateModule],
  declarations: [],
  providers: [],
})
export class TranslationModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TranslationModule,
      providers: []
    };
  }

  constructor(private translate: TranslateService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
    // translate.use(lang);
  }
}
