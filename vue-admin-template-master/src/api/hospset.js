import request from '@/utils/request'

export default {
    //医院列表
    getHospSetList(current, limit, searchObj) {
        return request({
            url: `/admin/hosp/hospitalSet/findPage/${current}/${limit}`,
            method: 'post',
            data: searchObj //使用json传递 请求参数
        })
    },
    //删除医院
    deleteHospSet(id) {
        return request({
            url: `/admin/hosp/hospitalSet/${id}`,
            method: 'delete'
        })
    },
    //批量删除
    batchRemoveHospSet(idList) {
        return request({
            url: `/admin/hosp/hospitalSet/batchRemove`,
            method: 'delete',
            data: idList
        })
    },
    //锁定和取消锁定
    lockHospSet(id, status) {
        return request({
            url: `/admin/hosp/hospitalSet/lockHospitalSet/${id}/${status}`,
            method: 'put'
        })
    },



    //添加医院
    saveHospSet(hospitalSet) {
        return request({
            url: `/admin/hosp/hospitalSet/saveHospitalSet`,
            method: 'post',
            data: hospitalSet //请求参数
        })
    },
    //院设置id查询  做修改的数据回显
    getHospSet(id) {
        return request({
            url: `/admin/hosp/hospitalSet/getHospSet/${id}`,
            method: 'get'
        })
    },
    //修改医院设置
    updateHospSet(hospitalSet) {
        return request({
            url: `/admin/hosp/hospitalSet/updateHospitalSet`,
            method: 'post',
            data: hospitalSet //json传递请求参数
        })
    }










}