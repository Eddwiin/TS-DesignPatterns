export interface ITheme {
    textColor: string;
    bgColor: string;
}

class LightTheme implements ITheme {
    textColor = 'black';
    bgColor = 'white';
}

class DarkTheme implements ITheme {
    textColor = 'white';
    bgColor = 'black';

}

export class TrackingThemeFactory {
    private readonly themes: WeakRef<ITheme>[] = [];

    public createTheme(dark: boolean): ITheme {
        const theme: ITheme = dark ? new DarkTheme() : new LightTheme();
        this.themes.push(new WeakRef(theme));
        return theme;
    }

    get info(): string {
        const sb: string[] = [];
        for (const reference of this.themes) {
            const theme = reference.deref();
            if (theme) {
                const dark = theme instanceof DarkTheme;
                sb.push(`${dark ? "Dark" : "Light"} theme`);
            }
        }
        return sb.join('\n');
    }
}

export class ReplaceableThemeFactory {
    private readonly themes: WeakRef<Ref<ITheme>>[] = [];

    createTheme(dark: boolean): Ref<ITheme> {
        let r = new Ref<ITheme>(this.createThemeImpl(dark));
        this.themes.push(new WeakRef(r));
        return r;
    }

    public replaceTheme(dark: boolean) {
        this.themes.forEach((wr) => {
            const ref = wr.deref();
            if (ref) {
                ref.value = this.createThemeImpl(dark);
            }
        })
    }

    private createThemeImpl(dark: boolean): ITheme {
        return dark ? new DarkTheme() : new LightTheme();
    }
}

class Ref<T extends object> {
    value: T;

    constructor(value: T) {
        this.value = value;
    }
}