import { render, screen, waitFor } from '@testing-library/react';
import PokeList from './PokeList';

describe('PokeList', () => {
    it.skip('should render the Pokemon', async () => {
        render(<PokeList />)

        return waitFor(() => {
            const pikachuName = screen.getByText('pikachu');
            // const pickachuImg = screen.getByText('http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png');

            // const pokemon = screen.getByLabelText('all-pokemon');

            expect(pikachuName).toHaveTextContent('pikachu');
            // expect(pickachuImg).toBeInTheDocument();

            // expect(pokemon).toHaveLength(801);
        });
    });
});