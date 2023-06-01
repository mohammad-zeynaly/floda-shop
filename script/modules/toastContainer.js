export default function toastContainer(iconType, caption) {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventLister("mouseenter", () => toast.stopTimer);
      toast.addEventLister("mouseleave", () => toast.resumeTimer);
    },
  });
  Toast.fire({
    icon: iconType,
    title: caption,
  });
}
