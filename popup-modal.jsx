
 
<>
            <nav>
                <button
                 onKeyUp={handleButtonActivate}
                 onMouseUp={handleButtonActivate}
                 aria-label="open settings panel">
                    <img src="gear.svg" height={40} width={40} alt="gear icon" />
                 </button>
            </nav>

            <dialog onClose={handleDialogClose} onMouseUp={onDialogClick}>
                <form method="dialog">
                    <h2>Settings</h2>
                    <div>
                         // Modal content goes here!
                    </div>
                    <button type="submit" aria-label="close settings">
                        X
                    </button>
                </form>
            </dialog>
</>
