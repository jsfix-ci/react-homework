import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigate, createSearchParams } from 'react-router-dom';
import { InputBase, Paper, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { SEARCH } from '../../utils/constants/routs';

export const SearchField = () => {
    const navigate = useNavigate();
    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            q: '',
        },
    });

    const onSubmit = (data) => {
        const { q } = data;
        if (q) {
            reset();
            navigate({
                pathname: SEARCH,
                search: `?${createSearchParams(data)}`,
            });
        }
    };

    return (
        <Paper
            component="form"
            sx={{ p: '2px', display: 'flex', alignItems: 'center', width: 260 }}
            onSubmit={handleSubmit(onSubmit)}
        >
            <Controller
                name="q"
                control={control}
                render={({ field }) => (
                    <InputBase
                        {...field}
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search films"
                        inputProps={{ 'aria-label': 'search film' }}
                    />
                )}
            />
            <IconButton type="submit" sx={{ p: '5px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};
