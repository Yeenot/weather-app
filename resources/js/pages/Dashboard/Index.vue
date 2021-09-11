<template>
    <div class="mt-6">
        <div>
            <t-select
                placeholder="Select a place"
                :options="places"
                text-attribute="name"
                value-attribute="value"
                v-model="selected"
            >
            </t-select>
        </div>
        <div class="mt-6 grid grid-cols-4 gap-4">
            <div
                v-for="result in results"
                :key="result.id"
            > 
                <t-card>
                    <div slot=header class="text-lg font-bold">
                        {{ result.name }}
                    </div>
                    <div class="flex flex-col">
                        <div>
                            <label class="font-bold">Information:</label>
                            <div class="flex flex-col mt-3">
                                <div class="flex text-sm">
                                    <div class="pr-4 font-medium">Feels like:</div>
                                    <div>{{ result.main.feels_like || '' }}</div>
                                </div>
                                <div class="flex text-sm">
                                    <div class="pr-4 font-medium">Humidity:</div>
                                    <div>{{ result.main.humidity || '' }}</div>
                                </div>
                                <div class="flex text-sm">
                                    <div class="pr-4 font-medium">Pressure:</div>
                                    <div>{{ result.main.pressure || '' }}</div>
                                </div>
                                <div class="flex text-sm">
                                    <div class="pr-4 font-medium">Temperature:</div>
                                    <div>{{ result.main.temp || '' }}</div>
                                </div>
                                <div class="flex text-sm">
                                    <div class="pr-4 font-medium">Temperature range:</div>
                                    <div>{{ result.main.temp_min || '' }} - {{ result.main.temp_max || '' }}</div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-4">
                            <label class="font-bold">Weathers</label>
                            <div class="flex flex-col border-b mt-4">
                                <div
                                    class="flex flex-col text-sm rounded-sm border-t border-l border-r border-gray-300 px-2 py-1"
                                    v-for="weather in result.weather"
                                    :key="weather.id"
                                >
                                    <div class="font-medium">
                                        {{ weather.main }}
                                    </div>
                                    <div class="pl-4">
                                        {{ weather.description }}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </t-card>
            </div>
        </div>
    </div>
</template>

<script>

import locations from './world-cities.json'
export default {
    data: () => ({
        places: [],
        selected: null,
        results: []
    }),
    mounted() {
        this.formatPlaces()
    },
    watch: {
        selected() {
            this.getWeather()
        }
    },
    methods: {
        formatPlaces() {
           this.places = _.map(locations, (location, index) => {
                return {
                    value: index,
                    name: `${location.city}, ${location.country}`,
                    city: location.city,
                    country: location.country,
                    lat: location.lat,
                    lng: location.lng,
                }
            })
        },
        getWeather() {
            var vm = this
            if (vm.selected) {
                var place = vm.places[vm.selected]
                console.log('place', place)
                axios.get('/api/weather', {
                    params: {
                        lat: place.lat,
                        lon: place.lng
                    }
                }).then((response) => {
                        console.log('response', response)
                    if (response.status == 200) {
                        vm.results = response.data.list
                        console.log('results', vm.results)
                    }
                })
            }
        }
    }
}
</script>