<script>
export default {
    component: 'FieldView2',
    data:
        function () {
            return {
                menu: [
                    {
                        name: '진행중 청원'
                    },
                    {
                        name: '만료된 청원'
                    }
                ]
            }
        }
}
</script>

<template>
    <div class="field">
        <ul class="field__ul">
            <li
              v-for="(idx) in menu"
              :key="idx"
              class="field__li">
                {{ idx.name }}
              </li>
        </ul>
    </div>    
</template>

<style lang="scss" scoped>

.field {
    display: grid;
    margin-bottom: 5em;
    &__ul { 
        overflow: hidden;
        text-align: center;
        list-style: none;
        padding-left: 25em;
    }
    &__li {
        display: inline-block;
        float: left;
        text-align: center;
        width: 35%;
        font-size: 1.2em;
        border-top: 3px solid #761010;
        border-left: 1px solid #333;
        border-right: 1px solid #333;
    }
}
</style>
