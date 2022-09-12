import Swal from 'sweetalert2';

export class SwallUtil {

  static mensagemSucesso(mensagem: string) {
    const Toast = this.retornaToast();

    Toast.fire(mensagem, '', 'success');
  }

  static mensagemError(mensagem: string) {
    const Toast = this.retornaToast();

    Toast.fire(mensagem, '', 'error');
  }

  static mensagemInfo(mensagem: string) {
    const Toast = this.retornaToast();

    Toast.fire(mensagem, '', 'info');
  }

  static mensagemConfirmacao() {
    return Swal.fire({
      title: 'Tem certeza?',
      text: "Você não podera reverter isso!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim'
    })
  }

  private static retornaToast() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
    });
    return Toast;
  }
}
