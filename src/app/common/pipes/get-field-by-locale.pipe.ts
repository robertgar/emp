import {Inject, LOCALE_ID, Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'getFieldByLocale',
})
export class GetFieldByLocalePipe implements PipeTransform {

  constructor(@Inject(LOCALE_ID) protected localeId: string) {
  }

  transform(project: any, field: string): any {

    if (project[field]) {
      const locale = this.localeId === 'en-US' ? 'en' : this.localeId;
      // const locale = 'es';
      const localizedTranslation = this.getTranslationByLocale(
        project.translations, locale);

      return localizedTranslation[field]; // {"title"}
    }
    return null;
  }

  getTranslationByLocale(translations, locale) {
    const localizedTranslationArray = translations.filter(
      translation => translation.locale === locale);

    if (Array.isArray(localizedTranslationArray) &&
      localizedTranslationArray.length > 0) {
      return localizedTranslationArray[0];
    }

    return null;
  }
}
