-- --------------------------------------------------------

--
-- Table structure for table `cond`
--

CREATE TABLE IF NOT EXISTS `cond` (
  `condition_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `probility_good` float NOT NULL,
  `bonus_good` int(11) NOT NULL,
  `bonus_bad` int(11) NOT NULL,
  `bonus_fix` int(11) NOT NULL,
  `is_default` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`condition_id`),
  UNIQUE KEY `condition_id` (`condition_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `cond`
--

INSERT INTO `cond` (`condition_id`, `probility_good`, `bonus_good`, `bonus_bad`, `bonus_fix`, `is_default`) VALUES
(1, 0.5, 10000, -10000, 500, 1);

-- --------------------------------------------------------

--
-- Table structure for table `group1`
--

CREATE TABLE IF NOT EXISTS `group1` (
  `user_id` int(11) NOT NULL,
  `answer1` char(2) NOT NULL,
  `answer2` char(2) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `group1`
--

INSERT INTO `group1` (`user_id`, `answer1`, `answer2`) VALUES
(1, 'A', 'D');

-- --------------------------------------------------------

--
-- Table structure for table `group2`
--

CREATE TABLE IF NOT EXISTS `group2` (
  `user_id` int(11) NOT NULL,
  `answer` char(2) NOT NULL,
  `condition_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `group2`
--

INSERT INTO `group2` (`user_id`, `answer`, `condition_id`) VALUES
(2, 'B', 1);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE IF NOT EXISTS `sessions` (
  `session_id` char(128) NOT NULL,
  `atime` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `data` text,
  UNIQUE KEY `session_id` (`session_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`session_id`, `atime`, `data`) VALUES
('d173011580615e541f987af23a5eff130a0b4a26', '2013-02-09 01:29:59', 'KGRwMQpTJ21ham9yJwpwMgpWXHU3ZWNmXHU3YmExCnAzCnNTJ3VzZXJfaWQnCnA0CkwyTApzUydp\ncCcKcDUKVjEyNy4wLjAuMQpwNgpzUydhZ2UnCnA3ClYyMgpwOApzUydncm91cDFfMScKcDkKVkEK\nc1Mnc2Vzc2lvbl9pZCcKcDEwClMnZDE3MzAxMTU4MDYxNWU1NDFmOTg3YWYyM2E1ZWZmMTMwYTBi\nNGEyNicKcDExCnNTJ3NleCcKcDEyClZcdTU5NzMKc1MnY29uZGl0aW9uX2lkJwpwMTMKTDFMCnMu\n');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `age` smallint(6) NOT NULL,
  `sex` char(4) NOT NULL,
  `major` char(8) NOT NULL,
  `group_id` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `user_id` (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `age`, `sex`, `major`, `group_id`) VALUES
(1, 21, '男', '理工', 1),
(2, 22, '女', '经管', 2);