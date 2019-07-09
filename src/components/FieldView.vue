<script>
export default {
    name: 'FieldView',
    data:
    function() {
        return {
            category: [
                {
                    name: '궁금한 분야1'
                },
                {
                    name: '궁금한 분야2'
                }, 
                {
                    name: '궁금한 분야3'
                }, 
                {
                    name: '궁금한 분야4'
                }, 
                {
                    name: '궁금한 분야5'
                }, 
                {
                    name: '궁금한 분야6'
                }, 
                {
                    name: '궁금한 분야7'
                }, 
                {
                    name: '궁금한 분야8'
                }, 
                {
                    name: '궁금한 분야9'
                }, 
                {
                    name: '궁금한 분야10'
                }, 
                {
                    name: '궁금한 분야11'
                }
            ]
        }
    }
}
</script>


<template> 
    <div class="field">
        <div class="field__title">
            <div id="mark"></div>
            청원 분야별 보기
        </div>
        <div class="field__category__base"> 
            <ul>
                <li 
                v-for="(idx) in category"
                :key="idx"
                id="category__content"
                >
                {{ idx.name }}
                </li>
                </ul>

        </div>
        <div>
            진행중 청원
            <br>
            만료된 청원
        </div>
    </div>
    
</template>

<style lang="scss" scoped>
ul {
    margin: 0px;
    padding: 0px;
}
#mark {
    display: inline-block;
    width: 5px;
    height: 5px;
    background-color: #263f73;
    vertical-align: middle;
    margin-bottom: 7px;
    margin-right: 6px;
    margin-left: 6px;
}
#category__content {
    text-decoration: none;
    font-size: 16px;
    padding: 10px 20px;
    display: block;
    border-radius: 3px;
    font-weight: 500;
    float: left;
}
.field {
    display: grid;
    overflow: hidden;
    &__title {
        font-size: 1.5em;
        margin-top: 3em;
        margin-left: 3em;
    }
    &__category__base {
        display: flex;
        flex-direction: row;
        border: 1px solid rgb(4, 4, 163);
        overflow: hidden;
        padding: 15px;
        margin-left: 6.5em;
        margin-right: 7em;
        margin-top: 1.5em;
    }

}
</style>
