export interface Person{
    id?: string
    nombre: string;
    apellido: string;
    acercaDe: string;
    urlFoto: string;
} 

export interface Experience{
    urlLogo:string;
    institucion:string; 
    cargo:string; 
    fechaDesde:string;
    fechaHasta:string;
}

export interface Education{
    urlLogo:string;
    institucion:string;
    titulo:string;
    fecha:string;
}

export interface Skills{
    habilidad:string;
    porcentaje:string;
}

export interface Projects{
    nombre:string;
    descripcion:string;
    urlProyecto:string;
    fecha:string
}