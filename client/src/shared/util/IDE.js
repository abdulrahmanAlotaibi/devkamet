import { monaco } from "@monaco-editor/react";
/**
 * @desc Change Monaco editor theme settings
 */
export const changeTheme = (newTheme = "Default") => {
    // evt: you could see the specifc changes
    monaco
        .init()
        .then((monaco) => {
            /* here is the instance of monaco, so you can use the `monaco.languages` or whatever you want */
            import(`./themes/${newTheme}.json`).then((data) => {
                monaco.editor.defineTheme(newTheme, data);
                monaco.editor.setTheme(newTheme);
            });
        })

        .catch((error) =>
            console.error(
                "An error occurred during initialization of Monaco: ",
                error
            )
        );
};