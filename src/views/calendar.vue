<template>
    <v-layout style="height: 150px">
        <v-system-bar color="indigo-darken-2">
            <v-icon icon="mdi-wifi-strength-3" class="ms-2"></v-icon>

            <v-icon icon="mdi-signal-cellular-outline" class="ms-2"></v-icon>

            <v-icon icon="mdi-battery" class="ms-2"></v-icon>

            <span class="ms-2">13:24</span>
        </v-system-bar>        
    </v-layout>
    <v-btn variant="tonal" color="lightblue" to="/">Home</v-btn>
    <v-carousel>
        <v-carousel-item>
            <div Align=center>
                <h1>Janvier</h1>
            </div>
            <v-row align="start" no-gutters style="height: 150px;">
                <v-col v-for="n in 31" :key="n">
                    <v-sheet>
                        <v-card color="blue-lighten-1" height="80" width="200" border = 1px solid gray>
                            <div class="d-flex fill-height align-center justify-center flex-wrap">
                                <h1>{{ n }}</h1>
                                <v-checkbox density="compact" hide-details="true" label="1" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="2" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="3" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="4" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="5" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="6" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="7" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="8" disabled=""></v-checkbox>
                            </div>
                        </v-card>
                    </v-sheet>
                </v-col>
                <v-col v-for="n in 4" :key="n">
                    <v-sheet>
                        <v-card color="white" height="80" width="200">
                        
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-carousel-item>
        <v-carousel-item>
            <div Align=center>
                <h1>Février</h1>
            </div>
            <v-row align="start" no-gutters style="height: 150px;">
                <v-col v-for="n in 28" :key="n">
                    <v-sheet>
                        <v-card color="blue-lighten-1" height="80" width="200">
                            <div class="d-flex fill-height align-center justify-center flex-wrap">
                                <h1>{{ n }}</h1>
                                <v-checkbox density="compact" hide-details="true" label="1" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="2" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="3" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="4" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="5" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="6" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="7" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="8" disabled=""></v-checkbox>
                            </div>
                        </v-card>
                    </v-sheet>
                </v-col>
                <v-col v-for="n in 7" :key="n">
                    <v-sheet>
                        <v-card color="white" height="80" width="200">
                        
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-carousel-item>
        <v-carousel-item>
            <div Align=center>
                <h1>Mars</h1>
            </div>
            <v-row align="start" no-gutters style="height: 150px;">
                <v-col v-for="n in 31" :key="n">
                    <v-sheet>
                        <v-card color="blue-lighten-1" height="80" width="200">
                            <div class="d-flex fill-height align-center justify-center flex-wrap">
                                <h1>{{ n }}</h1>
                                <v-checkbox density="compact" hide-details="true" label="1" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="2" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="3" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="4" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="5" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="6" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="7" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="8" disabled=""></v-checkbox>
                            </div>
                        </v-card>
                    </v-sheet>
                </v-col>
                <v-col v-for="n in 4" :key="n">
                    <v-sheet>
                        <v-card color="white" height="80" width="200">
                        
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-carousel-item>
        <v-carousel-item>
            <div Align=center>
                <h1>Avril</h1>
            </div>
            <v-row align="start" no-gutters style="height: 150px;">
                <v-col v-for="n in 30" :key="n">
                    <v-sheet>
                        <v-card color="blue-lighten-1" height="80" width="200">
                            <div class="d-flex fill-height align-center justify-center flex-wrap">
                                <h1>{{ n }}</h1>
                                <v-checkbox density="compact" hide-details="true" label="1" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="2" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="3" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="4" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="5" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="6" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="7" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="8" disabled=""></v-checkbox>
                            </div>
                        </v-card>
                    </v-sheet>
                </v-col>
                <v-col v-for="n in 5" :key="n">
                    <v-sheet>
                        <v-card color="white" height="80" width="200">
                        
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-carousel-item>
        <v-carousel-item>
            <div Align=center>
                <h1>Mai</h1>
            </div>
            <v-row align="start" no-gutters style="height: 150px;">
                <v-col v-for="n in 31" :key="n">
                    <v-sheet>
                        <v-card color="blue-lighten-1" height="80" width="200">
                            <div class="d-flex fill-height align-center justify-center flex-wrap">
                                <h1>{{ n }}</h1>
                                <v-checkbox density="compact" hide-details="true" label="1" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="2" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="3" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="4" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="5" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="6" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="7" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="8" disabled=""></v-checkbox>
                            </div>
                        </v-card>
                    </v-sheet>
                </v-col>
                <v-col v-for="n in 4" :key="n">
                    <v-sheet>
                        <v-card color="white" height="80" width="200">
                        
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-carousel-item>
        <v-carousel-item>
            <div Align=center>
                <h1>Juin</h1>
            </div>
            <v-row align="start" no-gutters style="height: 150px;">
                <v-col v-for="n in 30" :key="n">
                    <v-sheet>
                        <v-card color="blue-lighten-1" height="80" width="200">
                            <div class="d-flex fill-height align-center justify-center flex-wrap">
                                <h1>{{ n }}</h1>
                                <v-checkbox density="compact" hide-details="true" label="1" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="2" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="3" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="4" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="5" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="6" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="7" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="8" disabled=""></v-checkbox>
                            </div>
                        </v-card>
                    </v-sheet>
                </v-col>
                <v-col v-for="n in 5" :key="n">
                    <v-sheet>
                        <v-card color="white" height="80" width="200">
                        
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-carousel-item>
        <v-carousel-item>
            <div Align=center>
                <h1>Juillet</h1>
            </div>
            <v-row align="start" no-gutters style="height: 150px;">
                <v-col v-for="n in 31" :key="n">
                    <v-sheet>
                        <v-card color="blue-lighten-1" height="80" width="200">
                            <div class="d-flex fill-height align-center justify-center flex-wrap">
                                <h1>{{ n }}</h1>
                                <v-checkbox density="compact" hide-details="true" label="1" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="2" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="3" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="4" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="5" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="6" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="7" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="8" disabled=""></v-checkbox>
                            </div>
                        </v-card>
                    </v-sheet>
                </v-col>
                <v-col v-for="n in 4" :key="n">
                    <v-sheet>
                        <v-card color="white" height="80" width="200">
                        
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-carousel-item>
        <v-carousel-item>
            <div Align=center>
                <h1>Aôut</h1>
            </div>
            <v-row align="start" no-gutters style="height: 150px;">
                <v-col v-for="n in 31" :key="n">
                    <v-sheet>
                        <v-card color="blue-lighten-1" height="80" width="200">
                            <div class="d-flex fill-height align-center justify-center flex-wrap">
                                <h1>{{ n }}</h1>
                                <v-checkbox density="compact" hide-details="true" label="1" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="2" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="3" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="4" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="5" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="6" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="7" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="8" disabled=""></v-checkbox>
                            </div>
                        </v-card>
                    </v-sheet>
                </v-col>
                <v-col v-for="n in 4" :key="n">
                    <v-sheet>
                        <v-card color="white" height="80" width="200">
                        
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-carousel-item>
        <v-carousel-item>
            <div Align=center>
                <h1>Septembre</h1>
            </div>
            <v-row align="start" no-gutters style="height: 150px;">
                <v-col v-for="n in 30" :key="n">
                    <v-sheet>
                        <v-card color="blue-lighten-1" height="80" width="200">
                            <div class="d-flex fill-height align-center justify-center flex-wrap">
                                <h1>{{ n }}</h1>
                                <v-checkbox density="compact" hide-details="true" label="1" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="2" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="3" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="4" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="5" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="6" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="7" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="8" disabled=""></v-checkbox>
                            </div>
                        </v-card>
                    </v-sheet>
                </v-col>
                <v-col v-for="n in 5" :key="n">
                    <v-sheet>
                        <v-card color="white" height="80" width="200">
                        
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-carousel-item>
        <v-carousel-item>
            <div Align=center>
                <h1>Octobre</h1>
            </div>
            <v-row align="start" no-gutters style="height: 150px;">
                <v-col v-for="n in 31" :key="n">
                    <v-sheet>
                        <v-card color="blue-lighten-1" height="80" width="200">
                            <div class="d-flex fill-height align-center justify-center flex-wrap">
                                <h1>{{ n }}</h1>
                                <v-checkbox density="compact" hide-details="true" label="1" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="2" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="3" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="4" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="5" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="6" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="7" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="8" disabled=""></v-checkbox>
                            </div>
                        </v-card>
                    </v-sheet>
                </v-col>
                <v-col v-for="n in 4" :key="n">
                    <v-sheet>
                        <v-card color="white" height="80" width="200">
                        
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-carousel-item>
        <v-carousel-item>
            <div Align=center>
                <h1>Novembre</h1>
            </div>
            <v-row align="start" no-gutters style="height: 150px;">
                <v-col v-for="n in 30" :key="n">
                    <v-sheet>
                        <v-card color="blue-lighten-1" height="80" width="200">
                            <div class="d-flex fill-height align-center justify-center flex-wrap">
                                <h1>{{ n }}</h1>
                                <v-checkbox density="compact" hide-details="true" label="1" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="2" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="3" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="4" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="5" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="6" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="7" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="8" disabled=""></v-checkbox>
                            </div>
                        </v-card>
                    </v-sheet>
                </v-col>
                <v-col v-for="n in 5" :key="n">
                    <v-sheet>
                        <v-card color="white" height="80" width="200">
                        
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-carousel-item>
        <v-carousel-item>
            <div Align=center>
                <h1>Décembre</h1>
            </div>
            <v-row align="start" no-gutters style="height: 150px;">
                <v-col v-for="n in 31" :key="n">
                    <v-sheet>
                        <v-card color="blue-lighten-1" height="80" width="200">
                            <div class="d-flex fill-height align-center justify-center flex-wrap">
                                <h1>{{ n }}</h1>
                                <v-checkbox density="compact" hide-details="true" label="1" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="2" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="3" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="4" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="5" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="6" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="7" disabled=""></v-checkbox>
                                <v-checkbox density="compact" hide-details="true" label="8" disabled=""></v-checkbox>
                            </div>
                        </v-card>
                    </v-sheet>
                </v-col>
                <v-col v-for="n in 4" :key="n">
                    <v-sheet>
                        <v-card color="white" height="80" width="200">
                        
                        </v-card>
                    </v-sheet>
                </v-col>
            </v-row>
        </v-carousel-item>
    </v-carousel>
</template>

<script>

</script>
