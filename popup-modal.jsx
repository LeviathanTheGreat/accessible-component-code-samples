 <nav className="absolute right-2 sm:right-8 lg:right-16">
                <SettingsButton
                    onKeyUp={handleDialogOpen}
                    onMouseUp={handleDialogOpen}
                />
            </nav>

            <dialog ref={modalPopup} onMouseUp={onDialogClick} onClose={handleDialogClose}
                className={`${styles.dialog} rounded-xl mt-16 md:mt-48 w-[90vw] md:w-[60vw] md:max-w-xl ${ isModalOpen ? styles.dialogIn : '' }`}>
                <form method="dialog" onSubmit={() => { }} className="pt-5">
                    <h2 className="text-4xl text-center font-bold mb-10 font-merriweather">Settings</h2>
                    <div className="p-4 rounded-md grid grid-cols-1 md:grid-cols-2 gap-3  justify-center">
                        <div className="form-control w-full text-xl mb-10">
                            <label htmlFor="language" className="label select-text">Language</label>
                            <select value={characterSettings.charSet}
                                onChange={handleCharSetChange}
                                className="select select-lg select-bordered font-medium" name="language" id="language">
                                <option value="ar">Arabic</option>
                                <option value="fa">Persian</option>
                            </select>
                        </div>
                        <CharacterCountInput
                            characterSettings={characterSettings}
                            updateCharacterSettings={updateCharacterSettings} />

                    </div>
                    <button.
                        onMouseUp={handleDialogClose}
                        className="absolute right-0 top-0 m-4 px-2 py-1 rounded-lg opacity-40 hover:opacity-100 transition-opacity ease-in-out duration-200  "
                        type="button" aria-label="close settings">
                        <svg className="h-6 md:h-4 w-6 md:w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 460.8 460.8"><path d="M285 230 456 59c6-6 6-16 0-22L424 5a16 16 0 0 0-22 0L230 176 59 5a16 16 0 0 0-22 0L5 37c-7 6-7 16 0 22l171 171L5 402c-6 6-6 15 0 21l32 33a16 16 0 0 0 22 0l171-171 172 171a16 16 0 0 0 21 0l33-33c6-6 6-15 0-21L285 230z" /></svg>
                    </button>
                </form>
            </dialog>
