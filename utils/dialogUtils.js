export class DialogUtils {

    static async handleDialog(page) {
        const dialog = await page.waitForEvent('dialog');
        const message = dialog.message();
        console.log(`Dialog message: ${message}`);
        await dialog.accept();
        return message;
    }
}