import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfflineComponent } from './offline.component';

describe('OfflineComponent', () => {
    let component: OfflineComponent;
    let fixture: ComponentFixture<OfflineComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [OfflineComponent],
        });
        fixture = TestBed.createComponent(OfflineComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
