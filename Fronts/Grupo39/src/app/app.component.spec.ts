import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  afterEach(()=>{
    console.log("Pruebas finalizadas")
  })
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Grupo39'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Grupo39');
  });

  it('Verificar si el numero es par',()=>{
    let par=false;
    if (8%2==0){
      par=true;
    }else{
      par=false;
    }
    expect(par).toBeTruthy();
  });

  it('Le gusta la pizza con piña ',()=>{
    let gustos_de_lino=false;
    expect(gustos_de_lino).toBeFalse()

  })

  it ('hace parte del grupo 39',()=>{
    let lista =["heinner","jesus","juan diego","Lina"];
    expect(lista).toContain("Lina");
  })

});
