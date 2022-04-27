import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PokeList from './PokeList';

describe('PokeList Behavior', () => {
    it('should only display Vulpix on submit of Vulpix search', async () => {
        render(<PokeList />)

        await waitForElementToBeRemoved(screen.getByText('Loading'))
        // const loadingEl = screen.getByText('Loading');

        const search = await screen.findByPlaceholderText('find by name');

        const button = screen.getByRole('button');
        
        userEvent.type(search, 'vulpix');

        userEvent.click(button);
 
        const result = await screen.findByText('vulpix');

        expect(result.textContent).toEqual('vulpix');
    })
});