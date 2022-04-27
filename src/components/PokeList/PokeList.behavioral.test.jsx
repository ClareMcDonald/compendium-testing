import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PokeList from './PokeList';

describe('PokeList Behavior', () => {
    it('should only display Vulpix on submit of Vulpix search', async () => {
        render(<PokeList />)

        return waitFor(() => {
            userEvent.search('vulpix');
            
        });
    })
});