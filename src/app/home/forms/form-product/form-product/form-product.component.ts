import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CategoriaService } from 'src/app/services/categoria.service';
import { MarcaService } from 'src/app/services/marca.service';
import { ProductoService } from 'src/app/services/producto.service';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html'
})

export class FormProductComponent implements OnInit {

  categorias:any = [];
  marcas:any = [];
  public form!:FormGroup;

  constructor(
    private categoriaService:CategoriaService,
    private marcaService:MarcaService,
    private formBuilder: FormBuilder,
    private productoService: ProductoService
    ) { }
  
  ngOnInit(): void {

    this.form = this.formBuilder.group({
      categoria:['',Validators.required],
      precio:['',Validators.required],
      urlImg:['',Validators.required],
      modelo:['',Validators.required],
      cantidad:['',Validators.required],
      descripcion:['',Validators.required],
      marca:['',Validators.required],
    })

    this.categoriaService.consultarTallas().subscribe(categorias=>{
      this.categorias = categorias;
    })
    
    this.marcaService.consultarMarcas().subscribe(marcas=>{
      this.marcas = marcas;
    })
  }
  eliminar(producto:any){
    
  }
  onSubmit(){
    this.productoService.guardarProducto(this.form.value).subscribe(producto=>{
      console.log(producto);
    })
  }

}
