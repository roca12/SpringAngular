import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalComponent } from './principal.component';

describe('PrincipalComponent', () => {
  let component: PrincipalComponent;
  let fixture: ComponentFixture<PrincipalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [PrincipalComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("la lista de nombres tiene cierto tamaño",()=>{
    const fixture = TestBed.createComponent(PrincipalComponent);
    const app = fixture.componentInstance;
    expect(app.lista).toHaveSize(3);
  })

  it("El boton de subir archivo existe",()=>{
    const fixture=TestBed.createComponent(PrincipalComponent);
    const compiled= fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#elboton')).toBeTruthy();
  })

  it("El titulo tiene estilos de letra color rojo",()=>{
    const fixture=TestBed.createComponent(PrincipalComponent);
    const compiled= fixture.debugElement.nativeElement;
    let titulo= compiled.querySelector('#titulo');
    expect(titulo.classList).toContain('text-danger');
  })
  
  it("Todos los titulos tiene estilos de letra color rojo",()=>{
    const fixture=TestBed.createComponent(PrincipalComponent);
    const compiled= fixture.debugElement.nativeElement;
    let titulo= compiled.querySelectorAll('h1');
    let encontrado =false;
    for(let nodo of titulo){
      if (!nodo.classList.contains('text-danger')){
        encontrado=true;
      }
    }
    expect(encontrado).toBeFalse();
  })

});
