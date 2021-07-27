import React from "react";

import "nes.css/css/nes.min.css";
import styles from "./NesComponent.module.scss";

export default function NesComponent() {
    return (
        <div className={styles.block_container}>
            <section class="nes-container with-title">
                <h3 class="title">Texts</h3>{" "}
                <div id="texts" class="item">
                    <span class="nes-text is-primary">Primary</span>
                    <span class="nes-text is-success">Success</span>
                    <span class="nes-text is-warning">Warning</span>
                    <span class="nes-text is-error">Error</span>
                    <span class="nes-text is-disabled">Disabled</span>
                </div>{" "}
                <button type="button" class="nes-btn is-primary showcode">
                    &lt;&gt;
                </button>
            </section>
        </div>
    );
}
