 <nav>
                <button
                 onKeyUp={handleButtonActivate}
                 onMouseUp={handleButtonActivate}
                 aria-label="open settings panel">
                    <img src="gear.svg" height={40} width={40} alt="gear icon" />
                 </button>
            </nav>

            <dialog ref={modalPopup} onMouseUp={onDialogClick} onClose={handleDialogClose}>
                <form method="dialog">
                    <h2>Settings</h2>
                    <div>
                        <div>
                            <label htmlFor="language" className="label select-text">Language</label>
                            <select name="language"
                                value={characterSettings.charSet}
                                onChange={handleCharSetChange}
                                className="select select-lg select-bordered font-medium" id="language">
                                <option value="ar">Arabic</option>
                                <option value="fa">Persian</option>
                            </select>
                        </div>
                    </div>
                    <button type="submit" aria-label="close settings">
                        X
                    </button>
                </form>
            </dialog>
