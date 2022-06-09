export function tempoParaSegundos(tempo: string){
    const [horas = '0', minutos = '0', segundos = '0'] = tempo.split(':');

    const horaParaSegundo = Number(horas) * 3600;
    const minutoParaSegundo = Number(minutos) * 60
    return horaParaSegundo + minutoParaSegundo + Number(segundos);
}