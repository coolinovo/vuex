<template>
  <div id="app">
    <a-input
        placeholder="请输入任务"
        class="my-ipt"
        :value="inputVal"
        @change="iptChange"
    ></a-input>
    <a-button type="primary" @click="addItem">添加事项</a-button>

    <a-list bordered :dataSource="list" class="dt-list">
            <a-list-item slot="renderItem" slot-scope="item">
              <!-- 复选框 -->
              <a-checkbox :checked="item.done" @change="changeCkb($event, item.id)">{{item.info}}</a-checkbox>
              <!-- 删除链接 -->
              <a slot="actions" @click="del(item.id)">删除</a>
            </a-list-item>

      <div slot="footer" class="footer">
        <!-- 未完成的任务 -->
        <span>0条剩余</span>
        <!-- 操作按钮 -->
        <a-button-group>
          <a-button type="primary">全部</a-button>
          <a-button type="warning">未完成</a-button>
          <a-button>已完成</a-button>
        </a-button-group>
        <!-- 清空已完成 -->
        <a>清除已完成</a>
      </div>
    </a-list>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'app',
    data() {
      return {}
    },
    computed: {
      ...mapState(['list', 'inputVal'])
    },
    created() {
      this.$store.dispatch("getList")
    },
    methods: {
      iptChange(e) {
        console.log(e)
        this.$store.commit('changeIpt', e.target.value)
      },
      // 添加
      addItem() {
        if (this.inputVal.trim().length <= 0) return this.$message.warning('不能为空')
        this.$store.commit('addItem')
      },
      // 删除一条
      del(id) {
        this.$store.commit('delItem', id)
      },
      // 复选框
      changeCkb(e, id) {
        const checked = e.target.checked
        this.$store.commit('changeCkb', {checked, id})
      }
    }
  }
</script>

<style scoped>
  #app {
    user-select: none;
    padding: 10px;
  }

  .my-ipt {
    width: 500px;
    margin-right: 10px;
  }

  .dt-list {
    width: 500px;
    margin-top: 10px;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
