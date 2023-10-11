import React from "react";
import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import Toast from "../Toast";
import ToastShelf from "../ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0]);
  const [isToastVisible, setIsToastVisible] = React.useState(false);

  function dismissPlaygroundToast() {
    setIsToastVisible(false);
  }

  function createToast(e) {
    e.preventDefault();
    setIsToastVisible(true);
  }
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {isToastVisible && (
        <Toast
          message={message}
          variant={variant}
          dismissHandler={dismissPlaygroundToast}
        />
      )}

      <ToastShelf />

      <form onSubmit={createToast} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className={styles.messageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variantOption) => (
              <label htmlFor={`variant-${variantOption}`}>
                <input
                  id={`variant-${variantOption}`}
                  type="radio"
                  name="variant"
                  value={variantOption}
                  key={variantOption}
                  checked={variant === variantOption}
                  onChange={(e) => {
                    setVariant(e.target.value);
                  }}
                />
                {variantOption}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
