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

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Grupo27'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Grupo27');
  });

  it("Se revisa si un numero es par",()=>{
    let numero=24;
    let par=false;
    if (numero%2==0){
      par=true;
    }else{
      par=false;
    }
    expect(par).toBeTrue();
  })

  it("Se encuentra el estudiante dentro de la lista",()=>{
    let lista=["Gloria","Sergio","Mhartim","Yeldi","Benjamin"]
    expect(lista).toContain("Gloria")
  })

  it("Se espera que la persona sea adulta",()=>{
    let edad=17;
    expect(edad).toBeGreaterThanOrEqual(18);
  })

 
});
