function distancia_más_corta(texto: string, letra: string): number[] {
    const distances: number[] = []; // Matriz para almacenar las distancias
    let indice = -1; // Índice de la aparición más reciente de la letra objetivo
  
    for (let i = 0; i < texto.length; i++) {
      if (texto[i] === letra) {
        indice = i; // Actualiza el índice si se encuentra la letra objetivo
      }
      distances.push(i - indice); // Calcula y agrega la distancia
    }
  
    return distances; // Devuelve la matriz de distancias
  }
  
  // Ejemplo de uso
  const texto = 'walter';
  const letra = 'w';
  const distancia = distancia_más_corta(texto, letra); // Calcula las distancias
  
  console.log(texto.split('').join(' ')); // Imprime el texto separado por espacios
  console.log(distancia.join(' ')); // Imprime las distancias separadas por espacios
  
