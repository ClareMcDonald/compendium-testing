import { render, screen, waitFor } from '@testing-library/react';
import PokeList from './PokeList';

describe('PokeList', () => {
    it('should render the Pokemon', async () => {
        render(<PokeList />)

        return waitFor(() => {
            const pikachuName = screen.getByText('pikachu');
            // const pickachuImg = screen.getByText('http://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png');

            const pokemon = screen.getByRole('all-pokmeon');

            expect(pikachuName).toHaveTextContent('pikachu');
            // expect(pickachuImg).toBeInTheDocument();

            expect(pokmeon).toHaveLength(801);
        });
    });
});