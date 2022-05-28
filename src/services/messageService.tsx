interface Props {
  autoHideTime: number;
  message?: string;
  messageType: "error" | "success" | "warning";
}

// --------------------------------------------------
// handle error message show
export const showMessage = ({ autoHideTime, message, messageType }: Props) => {
  const customStyle = decideStyle(messageType); // get style
  const messageHolder: HTMLElement | null =
    document.getElementById("error-message");

  if (messageHolder) {
    Object.assign(messageHolder.style, customStyle); // apply style
    messageHolder.innerHTML = message ? message : messageType === "success" ? "Success" : "Error"; // assign custom message

    // set custom timer to hide message box
    setTimeout(() => {
      if (messageHolder) {
        messageHolder.style.display = "none";
      }
    }, autoHideTime * 1000);
  }
};

// ------------------------------------------------------------------
// it decide the message color
export const decideStyle = (messageType: "error" | "success" | "warning") => {
  let colorScheme = { display: "block", background: "red", color: "white" };

  if (messageType === "error") {
    colorScheme = { ...colorScheme };
  } else if (messageType === "success") {
    colorScheme = { ...colorScheme, background: "green" };
  } else if (messageType === "warning") {
    colorScheme = { ...colorScheme, background: "yellow" };
  }

  return colorScheme;
};
