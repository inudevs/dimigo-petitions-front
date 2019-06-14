<template>
<div>
    <nav>
        <ul class="nav-container">
            <li class="nav-item"><a href="https://dimigo.in/">디미고인</a></li>
            <li class="nav-item"><a href="https://dimigo.life/">디미고라이프</a></li>
            <li class="nav-item"><a href="https://benedu.co.kr/">베네듀</a></li>
            <li class="nav-item"><a>자퇴상담센터</a></li>
            <li class="nav-item"><a href="https://www.dimigo.hs.kr/">학교 홈페이지</a></li>
            <li class="nav-item" id="correction"><a>커뮤니티</a></li>
        </ul>
    </nav>
</div>
    
</template>

<script>
export default {
    data:
    {
        category:
        [
            { index:1, name:'디미고인' },
            { index:2, name:'디미고라이프' },
            { index:3, name:'베네듀' },
            { index:4, name:'자체상담센터' },
            { index:5, name:'학교 홈페이지' },
            { index:6, name:'커뮤니티' }
        ]
    }
}
</script>

<style>
body
{
    margin: 0em;
}
.nav-container
{
    padding: 0em;
    margin: 0em;
    margin-top: 2em;
    border: 30px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    width: 100%;
    background-color: rgba(151, 140, 141, 0.507);
    list-style-type: none;

}
.nav-item
{
    padding: 1em;
    cursor: pointer;
    float: right;
}
.nav-item a
{
    text-align: center;
    text-decoration: none;
    color: white;
}
#correction
{
    margin-right: 5em;
}

</style>

