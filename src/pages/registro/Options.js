
export const genreOptions = [
    { key: 'Femenino', value: 'f' },
    { key: 'Masculino', value: 'm' },
    { key: 'Otro', value: 'o' }
  ] 

export const comercio = [
  {key: 'Desde Casa', value: '0'},
  {key: 'Soy comercio', value: '1'}
]

export const condicionIva = [
  {key: 'Seleccionar', value: ''},
  {key: 'Responsable Inscripto', value: 1},
  {key: 'Consumidor Final', value: 4},
  {key: 'Monotributista', value: 6},
  {key: 'Otra', value: 7}
]

export const tipoDeUsuario = [
  {key: 'Desde Casa', value: '840'},
  {key: 'Soy comercio', value: '837'}
  
]
export const dayOptions = [
  {key: 'Día', value: ''},
  {key:'1', value: 1},
  {key:'2', value: 2},
  {key:'3', value: 3},
  {key:'4', value: 4},
  {key:'5', value: 5},
  {key:'6', value: 6},
  {key:'7', value: 7},
  {key:'8', value: 8},
  {key:'9', value: 9},
  {key:'10', value: 10},
  {key:'11', value: 11},
  {key:'12', value: 12},
  {key:'13', value: 13},
  {key:'14', value: 14},
  {key:'15', value: 15},
  {key:'16', value: 16},
  {key:'17', value: 17},
  {key:'18', value: 18},
  {key:'19', value: 19},
  {key:'20', value: 20},
  {key:'21', value: 21},
  {key:'22', value: 22},
  {key:'23', value: 23},
  {key:'24', value: 24},
  {key:'25', value: 25},
  {key:'26', value: 26},
  {key:'27', value: 27},
  {key:'28', value: 28},
  {key:'29', value: 29},
  {key:'30', value: 30},
  {key:'31', value: 31}
]
export const monthOptions = [
  {key:'Mes', value:'' },
  {key:'Enero', value: 0},
  {key:'Febrero', value: 1},
  {key:'Marzo', value: 2},
  {key:'Abril', value: 3},
  {key: 'Mayo', value: 4},
  {key:'Junio', value: 5},
  {key:'Julio', value: 6},
  {key:'Agosto', value: 7},
  {key:'Septiembre', value: 8},
  {key:'Octubre', value: 9},
  {key:'Noviembre', value:10},
  {key:'Diciembre', value: 11}
]

export const yearOptions = [
{key: 'Año', value: ''},
{key: 2003, value: 2003},
{key: 2002, value: 2002},
{key: 2001, value: 2001},
{key: 2000, value: 2000},
{key: 1999, value: 1999},
{key: 1998, value: 1998},
{key: 1997, value: 1997},
{key: 1996, value: 1996},
{key: 1995, value: 1995},
{key: 1994, value: 1994},
{key: 1993, value: 1993},
{key: 1992, value: 1992},
{key: 1991, value: 1991},
{key: 1990, value: 1990},
{key: 1989, value: 1989},
{key: 1988, value: 1988},
{key: 1987, value: 1987},
{key: 1986, value: 1986},
{key: 1985, value: 1985},
{key: 1984, value: 1984},
{key: 1983, value: 1983},
{key: 1982, value: 1982},
{key: 1981, value: 1981},
{key: 1980, value: 1980},
{key: 1979, value: 1979},
{key: 1978, value: 1978},
{key: 1977, value: 1977},
{key: 1976, value: 1976},
{key: 1975, value: 1975},
{key: 1974, value: 1974},
{key: 1973, value: 1973},
{key: 1972, value: 1972},
{key: 1971, value: 1971},
{key: 1970, value: 1970},
{key: 1969, value: 1969},
{key: 1968, value: 1968},
{key: 1967, value: 1967},
{key: 1966, value: 1966},
{key: 1965, value: 1965},
{key: 1964, value: 1964},
{key: 1963, value: 1963},
{key: 1962, value: 1962},
{key: 1961, value: 1961},
{key: 1960, value: 1960},
{key: 1959, value: 1959},
{key: 1958, value: 1958},
{key: 1957, value: 1957},
{key: 1956, value: 1956},
{key: 1955, value: 1955},
{key: 1954, value: 1954},
{key: 1953, value: 1953},
{key: 1952, value: 1952},
{key: 1951, value: 1951},
{key: 1950, value: 1950},
{key: 1949, value: 1949},
{key: 1948, value: 1948},
{key: 1947, value: 1947},
{key: 1946, value: 1946},
{key: 1945, value: 1945},
{key: 1944, value: 1944},
{key: 1943, value: 1943},
{key: 1942, value: 1942},
{key: 1941, value: 1941},
{key: 1940, value: 1940}
]


export const initialValues = {
    usuario: {
      nombre: '',
      apellido: ''
    },
    email: '',
    password: '',
    dni: '',
    nacimiento: {
      dia: '',
      mes: '',
      año: ''
    },
    phone:'',
    genero: '',
    comercio: '',
    cuit:'',
    razonSocial: '',
    condicionIva: '',
    createdOn: ''
}
  

