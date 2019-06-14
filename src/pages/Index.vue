<template>
    <div>
        <main-category></main-category>
    </div>
</template>

<script>

import Main_Category from '@/components/Main_Category.vue'
import BackGround from '@/components/BackGround' 
import Petitions_Category from '@/components/Petitions_Category' 
import Petitions_Contents from '@/components/Petitions_Contents' 
import Page_Number from '@/components/Page_Number' 

export default {
    components:
    {
        'main-category' : Main_Category,
        'background' : BackGround,
        'petitions-category' : Petitions_Category,
        'petitions-contents' : Petitions_Contents,
        'page-number' : Page_Number
    }
}
</script>

<style>

</style>
