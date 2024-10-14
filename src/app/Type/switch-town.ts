
type Town = 'Paris' | 'London' | 'Rome';

function getCountryFromTown(town: Town): string {
    switch(town) {
        case 'Paris':
            return 'France'
        case 'London':
            return 'UK'
        case 'Rome':
            return 'Italia'
        default:
            const location: never = town;
            throw new Error(`${town} is unknown`)
    }

}