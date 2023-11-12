export default {
    template: `
    <div>
        <button 
            @click="$emit('change', tag)"
            v-for="tag in tags" 
            class="border rounded px-1 mx-1 py-px text-xs"
            :class="{
                'border-blue-500 text-blue-500' : tag === currentTag
            }"
        >{{ tag }}</button>
    </div>
    `,

    props: {
        inicialTags: Array,
        currentTag: String
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.inicialTags)];
        }
    }
}    
