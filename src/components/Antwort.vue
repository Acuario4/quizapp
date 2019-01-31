<template>
    <div>
            <ul class="antwortUL"
                :class="{ richtig: richtig, clicked: clicked }"
                style="cursor: pointer" 
                @click="antwortGewaehlt()">{{ antwort }}
                </ul>
    </div>
</template>

<script>
import { eventBus } from "../main.js";
export default {
    props: ['antwort', 'index', 'richtig', 'clicked'],
    methods: {
        antwortGewaehlt() {
            eventBus.$emit('antwortGewaehlt', this.index)
        }
    },
}
</script>

<style>
.antwortUL {
    background-color: rgba(167, 167, 167, 0.5);
    border: 1px solid gray
}

.richtig {
    background-color: rgba(172, 255, 47, 0.75) 
}

.falschUL {
    background-color: rgba(255, 0, 0, 0.5)
}

.clicked {
    background-color: rgb(0, 238, 255)
}
</style>
