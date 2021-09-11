import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import {
    TInput,
    TButton,
    TDatepicker,
    TCheckbox,
    TDropdown,
    TSelect,
    TCard,
    TAlert,
 } from 'vue-tailwind/dist/components';

const components = {
    TInput,
    TButton,
    TDatepicker,
    TCheckbox,
    TDropdown,
    TSelect,
    TCard,
    't-alert': {
        component: TAlert,
        props: {
            fixedClasses: {
                wrapper: 'relative flex items-center p-4 border-l-4  rounded shadow-sm',
                body: 'flex-grow',
                close: 'absolute relative flex items-center justify-center ml-4 flex-shrink-0 w-6 h-6 transition duration-100 ease-in-out rounded  focus:ring-2 focus:ring-blue-500 focus:outline-none focus:ring-opacity-50',
                closeIcon: 'fill-current h-4 w-4'
            },
            classes: {
                wrapper: 'bg-blue-50 border-blue-500',
                body: 'text-blue-700',
                close: 'text-blue-500 hover:bg-blue-200'
            },
            variants: {
                danger: {
                    wrapper: 'bg-red-50 border-red-500',
                    body: 'text-red-700',
                    close: 'text-red-500 hover:bg-red-200'
                },
                success: {
                    wrapper: 'bg-green-50 border-green-500',
                    body: 'text-green-700',
                    close: 'text-green-500 hover:bg-green-200'
                }
            }
        }
    }
}

Vue.use(VueTailwind, components)