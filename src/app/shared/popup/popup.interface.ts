import {Injectable, TemplateRef} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class PopupService {
    private readonly popupTemplateRef$ = new BehaviorSubject<TemplateRef<unknown> | null>(null);

    get popupTemplateRef(): Observable<TemplateRef<unknown> | null> {
        return this.popupTemplateRef$.asObservable();
    }

    loadPopupTemplate(popupTemplateRef: TemplateRef<unknown>) {
        this.popupTemplateRef$.next(popupTemplateRef);
    }

    clearPopupTemplate() {
        this.popupTemplateRef$.next(null);
    }
}